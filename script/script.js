
const totalDisp = document.getElementById('total-count');
const interviewDisp = document.getElementById('interview-count');
const rejectedDisp = document.getElementById('rejected-count');
const jobCountText = document.getElementById('job-count-text');
const noJobsView = document.getElementById('no-jobs-view');


function updateStatus() {
    const allCards = document.querySelectorAll('.job-card');
    let total = 0, interview = 0, rejected = 0;
    let visibleCount = 0;

    allCards.forEach(card => {
        
        if (card.classList.contains('in-interview')) interview++;
        else if (card.classList.contains('in-rejected')) rejected++;
        else total++;

        
        if (card.style.display !== 'none') visibleCount++;
    });

    
    totalDisp.innerText = total;
    interviewDisp.innerText = interview;
    rejectedDisp.innerText = rejected;
    jobCountText.innerText = visibleCount;

    if (visibleCount === 0) noJobsView.classList.remove('hidden');
    else noJobsView.classList.add('hidden');
}

document.querySelectorAll('.interview-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.job-card');
        card.classList.add('in-interview'); 
        card.classList.remove('in-rejected');
        card.style.display = 'none'; 
        updateStatus();
    });
});


document.querySelectorAll('.rejected-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.job-card');
        card.classList.add('in-rejected'); 
        card.classList.remove('in-interview');
        card.style.display = 'none';
        updateStatus();
    });
});


document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.job-card').remove();
        updateStatus();
    });
});


document.getElementById('btn-all').addEventListener('click', function() {
    document.querySelectorAll('.job-card').forEach(card => {
        
        if (!card.classList.contains('in-interview') && !card.classList.contains('in-rejected')) {
            card.style.display = 'block';
        } else card.style.display = 'none';
    });
    updateStatus();
});

document.getElementById('btn-interview').addEventListener('click', function() {
    document.querySelectorAll('.job-card').forEach(card => {
        if (card.classList.contains('in-interview')) card.style.display = 'block';
        else card.style.display = 'none';
    });
    updateStatus();
});

document.getElementById('btn-rejected').addEventListener('click', function() {
    document.querySelectorAll('.job-card').forEach(card => {
        if (card.classList.contains('in-rejected')) card.style.display = 'block';
        else card.style.display = 'none';
    });
    updateStatus();
});


updateStatus();
