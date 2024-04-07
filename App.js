
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
    const [editIndex, setEditIndex] = React.useState(null);
    const [newValue, setNewValue] = React.useState('');
    const [modalIsOpen, setModalIsOpen] = React.useState(false);


    const handleValueEdit = (index) => {
        setEditIndex(index);
        setNewValue(data[index].value);
        setModalIsOpen(true);
    };

    const handleSave = () => {
        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex].value = newValue;
            setData(newData);
        }
        setEditIndex(null);
        setModalIsOpen(false);
    };

    const modal = modalIsOpen ? (
        React.createElement('div', { className: 'modal' },
            React.createElement('div', { className: 'modal-content' },
                React.createElement('input', { type: 'text', value: newValue, onChange: (e) => setNewValue(e.target.value),className:'input' }),
                React.createElement('button', { onClick: handleSave ,className:'saveBtn' }, 'Save'),
                React.createElement('button', { className: 'closeBtn', onClick: () => setModalIsOpen(false) }, 'Close'),

            )
        )
    ) : null;


    const tableRows = (
        React.createElement('table', { style: { borderCollapse: 'collapse'} },
            React.createElement('tbody', null, 
                [
                    React.createElement('tr', { key: 'heading' },
                        React.createElement('td', { colSpan: '3', style: { padding: '5px', border: '1px solid #000', backgroundColor: '#D0D3D4', textAlign: 'center' } }, 'MONTH1')
                    ),
    
                    ...data.map((item, index) => (
                        React.createElement('tr', { key: index },
                        React.createElement('td', { style: { padding: '5px', border: '1px solid #000', backgroundColor: '#D0D3D4', textAlign: 'center' } }, item.name),
                        React.createElement('td', { style: { padding: '5px', border: '1px solid #000', cursor: 'pointer' }, onClick: () => handleValueEdit(index) }, item.value),
                            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', width: '100px' } }, item.value2)
                        )
                    ))
                ]
            )
        )
    );
    
  
    return (
        React.createElement('div',{ style: { textAlign: 'center' } },
            React.createElement('table', { style: { borderCollapse: 'collapse',margin:'auto'} },
                React.createElement('tbody', null, tableRows)
            ),
            modal
        )
    );
}

export default Table;

