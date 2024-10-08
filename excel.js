function saveData() {
    // Get the input values
    const firstName = document.getElementById('first_name').value;
    const topicName = document.getElementById('topic_name').value;
    const subTopicName = document.getElementById('sub_topic_name').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;

    // Create an object for the new data
    const newData = {
        name: firstName,
        main_topic: topicName,
        sub_topic: subTopicName,
        start_date: startDate,
        end_date: endDate
    };

    // Get existing data from local storage
    let existingData = JSON.parse(localStorage.getItem('userData')) || [];

    // Add new data to existing data
    existingData.push(newData);

    // Save updated data back to local storage
    localStorage.setItem('userData', JSON.stringify(existingData));

    // Clear the form
    document.getElementById('dataForm').reset();
    alert('Data saved successfully!');
}

function downloadData() {
    // Get data from local storage
    const data = localStorage.getItem('userData');

    if (!data) {
        alert('No data to download!');
        return;
    }

    // Create a blob and a link to download the file
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // a.download = 'user_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


