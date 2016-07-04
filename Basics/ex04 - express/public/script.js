const http = new XMLHttpRequest()

http.onreadystatechange = () => {
    if (http.readyState === 4) {
        switch (http.status) {
            case 200:
                window.alert(http.responseText)
                break;
            case 404:
                window.alert("boo 404!")
                break;
            default:
                window.alert("dunno what's going on...")
                break;
        }
    }
}

http.open('GET', "tjosan", true)
http.send()