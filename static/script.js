function startHack() {
    const target = document.getElementById('target').value;
    const status = document.getElementById('status');
    const output = document.getElementById('output');
    
    status.innerHTML = '🚀 HACKING INITIATED...';
    output.innerHTML = '> Aitzaz Hack Engine v2.0\n> Target: ' + target + '\n> Scanning...\n\n';
    
    fetch('/hack', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({target: target})
    }).then(() => {
        status.innerHTML = '✅ HACK COMPLETE';
        setTimeout(() => window.location.href = '/results', 2000);
    });
}
