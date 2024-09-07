async function shortUrl() {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

    if (response.ok) {
        const data = await response.text();
        document.getElementById('shortened-url').value = data;
        document.getElementById('results').innerHTML = ''; 
        
       
        setTimeout(() => {
            document.getElementById('shortened-url').value = '';
            document.getElementById('url').value = '';
        }, 10000);
    } else {
        document.getElementById('results').innerHTML = "Error Shortening";
    }
}

document.getElementById('copy-btn').addEventListener('click', function() {
    const shortenedUrl = document.getElementById('shortened-url').value;
    
    if (shortenedUrl) {
        navigator.clipboard.writeText(shortenedUrl).then(function() {
          
            const copyMessage = document.createElement('div');
            copyMessage.id = 'copy-message';
            copyMessage.innerText = 'URL copied to clipboard!';
            document.body.appendChild(copyMessage);

            setTimeout(() => {
                copyMessage.remove();
            }, 3000);
        }).catch(function(error) {
            console.error('Failed to copy text: ', error);
        });
    }
});
