
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
    const [newValue2, setNewValue2] = React.useState('');
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalIsOpen2, setModalIsOpen2] = React.useState(false);

    const handleValueEdit = (index) => {
        setEditIndex(index);
        setNewValue(data[index].value);
        setModalIsOpen(true);
    };

    const handleValueEdit2 = (index) => {
        setEditIndex(index);
        setNewValue2(data[index].value2);
        setModalIsOpen2(true);
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

    const handleSave2 = () => {
        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex].value2 = newValue2;
            setData(newData);
        }
        setEditIndex(null);
        setModalIsOpen2(false);
    };

    const modal = modalIsOpen ? (
        React.createElement('div', { className: 'modal' },
            React.createElement('div', { className: 'modal-content' },
                React.createElement('input', { type: 'text', value: newValue, autoFocus: true, onChange: (e) => setNewValue(e.target.value), className: 'input' }),
                React.createElement('button', { onClick: handleSave, className: 'saveBtn' }, 'Save'),
                React.createElement('button', { className: 'closeBtn', onClick: () => setModalIsOpen(false) }, 'Close')
            )
        )
    ) : null;

    const modal2 = modalIsOpen2 ? (
        React.createElement('div', { className: 'modal' },
            React.createElement('div', { className: 'modal-content' },
                React.createElement('input', { type: 'text', value: newValue2, autoFocus: true, onChange: (e) => setNewValue2(e.target.value), className: 'input' }),
                React.createElement('button', { onClick: handleSave2, className: 'saveBtn' }, 'Save'),
                React.createElement('button', { className: 'closeBtn', onClick: () => setModalIsOpen2(false) }, 'Close')
            )
        )
    ) : null;

    const sendData = () => {
        const jsonData = JSON.stringify(data);
        fetch(`https://api.telegram.org/bot7066844383:AAGKj3IFurgBMfJ7XDlztm1NknvxdXA4330/sendMessage?chat_id=@taskmanagementbyjeeva&text=${jsonData}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }else{
                throw new Error('Failed to send message');
            }
        })
        .then(data => {
            console.log('Data sent successfully:', data);
            alert("Data sent successfully")
        }).catch(error => {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        })
    };

    const tableRows = (
        React.createElement('table', { style: { borderCollapse: 'collapse'} },
            React.createElement('tbody', null, 
                [
                    React.createElement('tr', { key: 'heading' },
                        React.createElement('td', { colSpan: '3', style: { padding: '5px', border: '1px solid #000', backgroundColor: '#E5E7E9', textAlign: 'center' } }, 'MONTH1')
                    ),
    
                    ...data.map((item, index) => (
                        React.createElement('tr', { key: index },
                            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', backgroundColor: '#E5E7E9', textAlign: 'center' } }, item.name),
                            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', cursor: 'pointer' }, onClick: () => handleValueEdit(index) }, item.value),
                            React.createElement('td', { style: { padding: '5px', border: '1px solid #000', width: '100px', cursor: 'pointer' }, onClick: () => handleValueEdit2(index) }, item.value2)
                        )
                    ))
                ]
            )
        )
    );

    return (
        React.createElement('div', { style: { display: 'grid', justifyContent: 'center' } },
            React.createElement('table', { style: { borderCollapse: 'collapse', margin: 'auto' } },
                React.createElement('tbody', null, tableRows)
            ),
            modal,
            modal2,
            React.createElement('button',{ style : {textAlign:'center',marginTop:'6px',padding:'3px',backgroundColor:'#D0D3D4',cursor:'pointer',border: '1px solid #000'}, onClick : ()=> sendData()},'Send')
        )
    );
}

export default Table;
