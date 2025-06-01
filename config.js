// Application Configuration
const CONFIG = {
    // Scoring system configuration
    scoring: {
cleanliness: {
            scoreOptions: [
                { label: 'Well maintained', score: 2 },
                { label: 'Poorly Maintained', score: 1 },
                { label: 'Not Maintained', score: 0 }
            ]
        },
        defective: {
            scoreOptions: [
                { label: 'Sufficient / good condition', score: 2 },
                { label: 'Damaged / insufficient', score: 1 },
                { label: 'Insufficient / Not available', score: 0 }
            ]
        },
        recordKeeping: {
            scoreOptions: [
                { label: 'Well maintained', score: 2 },
                { label: 'Poorly Maintained', score: 1 },
                { label: 'Not Maintained', score: 0 }
            ]
        },
        essentials: {
            scoreOptions: [
                { label: 'Sufficient / good condition', score: 2 },
                { label: 'Damaged / insufficient', score: 1 },
                { label: 'Insufficient / Not available', score: 0 }
            ]
        },
        safety: {
            scoreOptions: [
                { label: 'Sufficient / good condition', score: 2 },
                { label: 'Damaged / insufficient', score: 1 },
                { label: 'Insufficient / Not available', score: 0 }
            ]
        }
    },

    // Data definitions
    data: {
        cleanlinessItems: [
            { name: 'Control room-inside', maxPoints: 6 },
            { name: 'Control room-outside', maxPoints: 6 },
            { name: 'Bathroom', maxPoints: 6 },
            { name: 'Battery Room', maxPoints: 6 },
            { name: 'Roof and surroundings', maxPoints: 6 }
        ],
        
        defectiveItems: [
            { name: 'Lightning Arrester', maxPoints: 2 },
            { name: 'Insulator', maxPoints: 2 },
            { name: 'Circuit Breaker', maxPoints: 2 },
            { name: 'Transformer', maxPoints: 2 },
            { name: 'Busbar', maxPoints: 2 },
            { name: 'Control Panel', maxPoints: 2 },
            { name: 'Battery', maxPoints: 2 },
            { name: 'Earthing System', maxPoints: 2 }
            
        ],
recordKeepingItems: [
            'Standard size SLD',
            'Notice board',
            'Duty roster',
            'Attendance register',
            'Permit-to-work book',
            'Shut-down / Break-down register',
            'Tripping register',
            'Log-book',
            'Daily test report of battery',
            'History Book',
            'Inspection Book'
        ],
        essentialsItems: [
            'Table & chairs (including visitor’s)',
            'Signboard',
            'Entry Restricted / প্রবেশ নিষেধ board',
            'Almirah',
            'Water purifier',
            'Shut-down / break-down boards',
            'Telephone / mobile phone',
            'Illumination of control room',
            'Torch',
            'Wall clock'
        ],
        safetyItems: [
            'Fire extinguisher',
            'First-aid box with medicines',
            '33kV hand gloves',
            '11kV hand gloves',
            'Discharge rod',
            'Helmet',
            'High Voltage detector',
            'Raincoat',
            'Gumboot'
        ],
        substations: {
            'North Division': ['Rajouri Garden 33kV', 'Pitampura 66kV', 'Model Town 33kV', 'Rohini 220kV'],
            'South Division': ['Vasant Kunj 66kV', 'Saket 33kV', 'Hauz Khas 66kV', 'Greater Kailash 33kV'],
            'East Division': ['Patparganj 220kV', 'Preet Vihar 66kV', 'Laxmi Nagar 33kV', 'Gandhi Nagar 66kV'],
            'West Division': ['Janakpuri 66kV', 'Tilak Nagar 33kV', 'Punjabi Bagh 66kV', 'Patel Nagar 33kV'],
            'Central Division': ['Kashmere Gate 220kV', 'IP Estate 66kV', 'Connaught Place 33kV', 'Karol Bagh 66kV']
        }
    },

    // UI Configuration
    ui: {
        progressClasses: {
            good: 'score-good',
            average: 'score-average',
            bad: 'score-bad'
        }
    }
};
