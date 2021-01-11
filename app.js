const chalk = require('chalk')
const yargs = require('yargs')
const notes= require('./notes.js')

//Create Add Command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//Create Remove Command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//Create List Command
yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
        notes.listNotes()
    }
})

//Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()
