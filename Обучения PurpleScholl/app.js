const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
    const [protokol, _, host , ...path] = url.split('/');
    if(protokol === 'https:' || protokol === 'http:') {
        if(!host.includes('.')){
            return;
        }
        console.log(protokol, _ , host ,path)
        console.log(`Проток: (${protokol.split(':')[0]})`);
        console.log(`Доменое имя: (${host})`)
        console.log(`Путь: (/${path.join('/')})`)
    }
}

getUrlParts(url);










