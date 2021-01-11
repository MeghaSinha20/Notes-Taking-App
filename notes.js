const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes...'
}


// Adding a note
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!!"))
    }
    else {
        console.log(chalk.red.inverse("Title already exist!"))
    }

}

//Removing a note

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesTokeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesTokeep)
    }
    else {
        console.log(chalk.red.inverse('No Note found!!'))
    }

}

//Listing the notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue("Your Notes.."))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

//Reading the notes
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}




//Saving a note
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


//loading a note
const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}