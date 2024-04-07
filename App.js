
function Table() {
    const initialData = [
        { name: 'Onboarding Call', value: 'Scheduled for next week', value2: ' ' },
        { name: 'Google Search Console Access', value: 'Access granted', value2: ' ' },
        { name: 'Google Analytics', value: 'Pending setup', value2: ' ' },
        { name: 'Website Access', value: 'Admin access provided', value2: ' ' },
        { name: 'Technical Audit', value: 'In progress', value2: ' ' },
        { name: 'Anchor Text and Semantic Analysis', value: 'To be discussed', value2: ' ' },
        { name: 'Competitor Analysis', value: 'Ongoing', value2: ' ' },
        { name: 'Anchor Text/URL Mapping', value: 'Not started', value2: ' ' },
        { name: 'Google Data Studio Report + Local Reporting Suite', value: 'Planning phase', value2: ' ' },
        { name: 'Site Level Optimization', value: 'Initial analysis completed', value2: ' ' },
        { name: 'On page Optimization', value: 'Work in progress', value2: ' ' },
        { name: 'Content Creation', value: 'Content strategy outlined', value2: ' ' },
        { name: 'Content Publishing', value: 'Awaiting approval', value2: ' ' },
        { name: 'Premium Press Release', value: 'Drafting press release', value2: ' ' },
        { name: 'Authority Niche Placements', value: 'Identifying opportunities', value2: ' ' },
        { name: 'Review Management', value: 'Monitoring reviews', value2: ' ' },
        { name: 'Index Links', value: 'Scheduled for next week', value2: ' ' },
        { name: 'Video Recap', value: 'Editing in progress', value2: ' ' },
    ];

    const [data, setData] = React.useState(initialData);

    const handleValueEdit = (index) => {
        const newValue = prompt('Enter new value:', data[index].value);
        if (newValue !== null) {
            const newData = [...data];
            newData[index].value = newValue;
            setData(newData);
        }
    };

    const tableRows = data.map((item, index) => (
        React.createElement('tr', { key: index },
            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', backgroundColor: '#ECF0F1 ' } }, item.name),
            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', cursor: 'pointer' }, onClick: () => handleValueEdit(index) }, item.value),
            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', width: '100px' } }, item.value2)
        )
    ));

    const tableStyle = { borderCollapse: 'collapse' };

    return (
        React.createElement('div', null,
            React.createElement('table', { style: tableStyle },
                React.createElement('tbody', null, tableRows)
            )
        )
    );
}

export default Table;

