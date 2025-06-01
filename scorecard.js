const ScoreCardComponent = {
    createScoreCard: (type, title, items, maxScore) => {
        const card = document.createElement('div');
        card.className = 'score-card';
        card.id = `${type}Card`;

        const header = document.createElement('div');
        header.className = 'score-card-header';
        header.innerHTML = `
            <h3>${title}</h3>
            <span id="${type}Score" class="current-score">0/0</span>
        `;

        const list = document.createElement('ul');
        list.id = `${type}ItemList`;
        list.className = 'score-item-list';

        card.appendChild(header);
        card.appendChild(list);

        return card;
    },

    populateItems: (type, items, scoreOptions) => {
        const list = document.getElementById(`${type}ItemList`);
        if (!list) return;

        list.innerHTML = ''; // Clear previous items

        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'score-item';

            const label = document.createElement('span');
            label.textContent = item.name || item.label || item;

            const select = document.createElement('select');
            select.className = 'score-select';
            select.dataset.type = type;
            select.dataset.index = index;

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select score';
            select.appendChild(defaultOption);

            scoreOptions.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.score;
                opt.textContent = option.label;
                if (item.score === option.score) {
                    opt.selected = true;
                }
                select.appendChild(opt);
            });

            // Event listener to handle selection
            select.addEventListener('change', e => {
                const newScore = parseInt(e.target.value);
                const index = parseInt(e.target.dataset.index);
                const type = e.target.dataset.type;
                App.setScore(type, index, newScore);
            });

            listItem.appendChild(label);
            listItem.appendChild(select);
            list.appendChild(listItem);
        });
    }
};
