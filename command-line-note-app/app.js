const yargs = require("yargs");
const notes = require("./notes");
yargs.version("20.10.18");

// add command
yargs.command({
    command: "add",
    description: "Add a new note",
    builder: {
        title: {
            description: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            description: "Note Body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// remove command
yargs.command({
    command: "remove",
    description: "Remove a note",
    builder: {
        title: {
            description: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

// read command

yargs.command({
    command: "read",
    description: "Read a note",
    builder: {
        title: {
            type: "string",
            description: "Note Title",
            demandOption: true,
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

// list command

yargs.command({
    command: "list",
    description: "List Notes",
    handler() {
        notes.listNotes();
    },
});

yargs.parse();
