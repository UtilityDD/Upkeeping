// Main Application
const App = {
    cleanlinessItems: [],
    defectiveItems: [],
    recordKeepingItems: [],
    essentialsItems: [],
    safetyItems: [],

    init: () => {
        App.cleanlinessItems = CONFIG.data.cleanlinessItems.map(item => ({...item, score: null}));
        App.defectiveItems = CONFIG.data.defectiveItems.map(item => ({...item, score: null}));
        App.recordKeepingItems = CONFIG.data.recordKeepingItems.map(item => ({ name: item, score: null }));
        App.essentialsItems = CONFIG.data.essentialsItems.map(item => ({ name: item, score: null }));
        App.safetyItems = CONFIG.data.safetyItems.map(item => ({ name: item, score: null }));

        ProgressComponent.init('progressContainer');
        FormComponent.init('formContainer');
        App.initializeScoreCards();
        App.updateAllScores();
    },

    initializeScoreCards: () => {
        const container = document.getElementById('scoreCardsContainer');

        const createCard = (id, label, items, max, scoreConfigKey) => {
            const card = ScoreCardComponent.createScoreCard(id, label, items, max);
            container.appendChild(card);
            ScoreCardComponent.populateItems(id, items, CONFIG.scoring[scoreConfigKey].scoreOptions);
        };

        createCard('cleanliness', 'Cleanliness', App.cleanlinessItems, 30, 'cleanliness');
        createCard('defective', 'Defective Items', App.defectiveItems, 16, 'defective');
        createCard('recordKeeping', 'Record Keeping', App.recordKeepingItems, 11, 'recordKeeping');
        createCard('essentials', 'Essentials', App.essentialsItems, 10, 'essentials');
        createCard('safety', 'Safety', App.safetyItems, 9, 'safety');
    },

    setScore: (type, itemIndex, score) => {
        const map = {
            cleanliness: App.cleanlinessItems,
            defective: App.defectiveItems,
            recordKeeping: App.recordKeepingItems,
            essentials: App.essentialsItems,
            safety: App.safetyItems
        };

        if (map[type]) {
            map[type][itemIndex].score = score;
            ScoreCardComponent.populateItems(type, map[type], CONFIG.scoring[type].scoreOptions);
        }

        App.updateAllScores();
    },

    updateAllScores: () => {
        const types = ['cleanliness', 'defective', 'recordKeeping', 'essentials', 'safety'];
        let totalCompleted = 0;
        let totalPoints = 0;

        const maxItems = {
            cleanliness: 5,
            defective: 8,
            recordKeeping: 11,
            essentials: 10,
            safety: 9
        };

        types.forEach(type => {
            const items = App[`${type}Items`];
            const completed = Utils.countCompleted(items);
            const points = Utils.calculateTotalPoints(items);
            App.updateCardScore(type, completed, points, maxItems[type]);
            totalCompleted += completed;
            totalPoints += points;
        });

        // Example totals
        const overallMaxCompleted = 43; // sum of all maxItems
        const overallMaxPoints = 86;    // if each item has max score 2

        ProgressComponent.update(totalCompleted, overallMaxCompleted, totalPoints, overallMaxPoints);
    },

    updateCardScore: (type, completed, points, maxItems) => {
        const scoreElement = document.getElementById(type + 'Score');
        if (scoreElement) {
            scoreElement.textContent = `${completed}/${points}`;
            scoreElement.className = `current-score ${Utils.getProgressClass(completed, maxItems)}`;
        }
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', App.init);
