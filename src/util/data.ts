


export const getExampleRunningData = () => {
    return {
        "title": "Get Better At Running",
        "notes": "Plan for getting slow and steady into better shape. Keep easy runs in Z2 to make sure hard runs are kept hard.",
        "weeks": [
            [
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "4*2000", "description": "Intervals, run 4*2000m hard, 2 minutes breaks", "link": "link" },
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Easy long run", "description": "Run easy for 75 to 120 minutes", "link": "link" },
            ],
            [
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "45/15", "description": "Intervals, run 45 seconds hard, 15 seconds slow. Repeat 20 times", "link": "link" },
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Easy long run", "description": "Run easy for 75 to 120 minutes", "link": "link" },
            ],
            [
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "8*1000", "description": "Intervals, run 8*1000m hard, 1 minute breaks", "link": "link" },
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Easy long run", "description": "Run easy for 75 to 120 minutes", "link": "link" },
            ],
            [
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Fartlek", "description": "Intervals, run 1,2,3,4 minutes hard, half the time breaks. Repeat two times", "link": "link" },
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Easy long run", "description": "Run easy for 75 to 120 minutes", "link": "link" },
            ],
            [
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "4*2000", "description": "Intervals, run 4*2000m hard, 2 minutes breaks", "link": "link" },
                { "title": "Easy run", "description": "Run easy for 45 to 60 minutes", "link": "link" },
                { "title": "Easy long run", "description": "Run easy for 75 to 120 minutes", "link": "link" },
            ]
        ]
    }
}

export const getExampleWorkoutPlan = () => {
    return {
        "id": 1,
        "type": "strength",
        "name": "Kraugens g&g (guns and glutes)",
        "goals": [
            {
                "description": "Be able to to 8 clean dips to bar, also being capable of running 8km without having a break.",
                "priority": 1
            },
            {
                "description": "Consume no alcohol during the period.",
                "priority": 2
            },
            {
                "description": "Increase motivation for workout out.",
                "priority": 3
            }
        ],
        "weeks": [
            {
                "weekNumber": 1,
                "workouts": [
                    {
                        "name": "Økt 1 - Rygg, biceps og skulder",
                        "exercises": [
                            {
                                "exerciseId": "Ø1",
                                "name": "Dips",
                                "link": "https://www.youtube.com/watch?v=l41SoWZiowI",
                                "description": "To perform a dip, the exerciser supports themselves on a dip bar with their arms straight down and shoulders over their hands, then lowers their body until their arms are bent to a 90 degree angle at the elbows, and then lifts their body up, returning to the starting position.",
                                "load": {
                                    "reps": 8,
                                    "sets": 3,
                                    "weight": 0,
                                    "isBodyWeight": true
                                }
                            },
                            {
                                "exerciseId": "Ø2",
                                "name": "Dumbbell benchpress",
                                "link": "https://www.youtube.com/shorts/SidmT09GXz8",
                                "description": "The dumbbell bench press is a version of the bench press that uses dumbbells instead of a barbell. Using two dumbbells and a bench, this exercise challenges the performer to lower both dumbbells to their chest before extending the arms to press them back up again",
                                "load": {
                                    "reps": 8,
                                    "sets": 4,
                                    "weightKg": 22,
                                    "isBodyWeight": false
                                }
                            }
                        ]
                    },
                    {
                        "name": "Økt 2 - Langkjøring 15km",
                        "exercises": [
                            {
                                "exerciseId": "Ø1",
                                "name": "Warmup",
                                "description": "Description of how to warm up for a 15km run."
                            },
                            {
                                "exerciseId": "Ø2",
                                "name": "15km",
                                "description": "The key is to take it slow. Running longer distances takes time and patience, so it's best to approach it gradually in order to avoid overuse injuries. Try some of these strategies to make your long-distance runs not only longer but also more enjoyable. BLA BLA BLA",
                                "pace": {
                                    "unit": "Enum (min/km or km/h)",
                                    "value": "4:50"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
}