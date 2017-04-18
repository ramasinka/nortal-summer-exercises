package com.nortal.race.assignment.controller;

import java.awt.*;
import java.awt.geom.Line2D;
import java.util.List;

import com.nortal.race.assignment.model.*;

public class RaceController {


    public RaceController() {
    }

    private List<Point> targetsToCapture = null;
    private List<Point> takenPoints = null;
    private double distance;
    private Point point;

    public VesselCommand calculateNextCommand(Vessel vessel, RaceArea raceArea) {
        VesselCommand vesselCommand = new VesselCommand(Thruster.FRONT, ThrusterLevel.T2);
        RaceResult raceResult = new RaceResult();
        if (raceResult.getStatus() == null) {
            raceResult.startRace();
        }

        double maxValue = 1000000000;

        while (!raceResult.isRaceOver()) {
            for (Point targetPoint : raceArea.getTargets()) {
                if (takenPoints.contains(targetPoint)) {
                    continue;
                } else {
                    Point position = vessel.getPosition();
                    distance = Line2D.ptLineDist(position.getX(),
                            position.getY(),
                            position.getX(),
                            position.getY(),
                            targetPoint.getX(),
                            targetPoint.getY());
                }
                if (distance < maxValue) {
                    maxValue = distance;
                    point = targetPoint;
                }
            }
        }
        if (point == null) {
            raceResult.setStatus(RaceResult.Status.COMPLETED);
            return vesselCommand;
        }


        return vesselCommand;
    }


}

