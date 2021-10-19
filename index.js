var tableData = [
    {
        "name": "Survey-Form",
        "gitUrl": "https://github.com/anandkva/task-map/blob/main/task/surveyforms.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/surveyforms.html",
        "demoUrl": "./task/surveyforms.html"
    },
    {
        "name": "Event-Form",
        "gitUrl": "https://github.com/anandkva/task-map/blob/main/task/eventhome.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/eventhome.html",
        "demoUrl": "./task/eventhome.html"
    },
    {
        "name": "Event-list",
        "gitUrl": "https://github.com/anandkva/task-map/blob/main/task/eventlist.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/eventlist.html",
        "demoUrl": "./task/eventlist.html"
    },
    {
        "name": "Eventlist-two Grid-Layout full-css",
        "gitUrl": "https://github.com/anandkva/task-map/blob/main/task/eventlist-two.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/eventlist-two.html",
        "demoUrl": "./task//eventlist-two.html"
    },
    {
        "name": "Newspaper",
        "gitUrl": "https://github.com/anandkva/task-map/blob/main/task/newspaper.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/newspaper.html",
        "demoUrl": "./task/newspaper.html"
    },
    {
        "name": "Calculator",
        "gitUrl": "https://github.com/anandkva/task-map/blob/dev/task/calculator/index.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/calculator/index.html",
        "demoUrl": "./task/calculator/index.html"
    },
    {
        "name": "Pagination",
        "gitUrl": "https://github.com/anandkva/task-map/blob/dev/task/pagination/index.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/pagination/index.html",
        "demoUrl": "./task/pagination/index.html"
    },
    {
        "name": "Dom Manupulation Form",
        "gitUrl": "https://github.com/anandkva/task-map/blob/dev/task/form/index.html",
        "deployUrl": "https://anandkva.github.io/task-map/task/form/index.html",
        "demoUrl": "./task/form/index.html"
    }
]
const buildTable = (data) => {
    var table = document.getElementById('myTable')
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td class="firstrow">${(i + 1)}</td>
                        <td class="firstrow">${data[i].name}</td>
                        <td class="firstrow"><a href="${data[i].gitUrl}">Click Here</a></td>
                        <td class="firstrow"><a href="${data[i].deployUrl}">Click Here</a></td>
                        <td class="firstrow"><a href="${data[i].demoUrl}">Click Here</a></td>
                  </tr>`
        table.innerHTML += row
    }
}
buildTable(tableData)
