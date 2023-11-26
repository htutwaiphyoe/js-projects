const fs = require("fs");
const chalk = require("chalk");

// read data from file
const loadFile = () => {
    try {
        return JSON.parse(fs.readFileSync(`${__dirname}/notes.json`, "utf8"));
    } catch (e) {
        return [];
    }
};

// save data to file
const saveFile = (notes) => {
    fs.writeFileSync(`${__dirname}/notes.json`, JSON.stringify(notes), "utf8");
};

// check title
const checkInput = (input) => {
    return input.trim() ? true : false;
};
// add note to data
exports.addNote = (title, body) => {
    if (checkInput(title) && checkInput(body)) {
        const notes = loadFile();
        const duplicateNote = notes.filter((note) => note.title === title);

        const note = {
            title,
            body,
        };
        if (duplicateNote.length > 0) {
            console.log(chalk.yellowBright.inverse("Title is already taken"));
        } else {
            notes.push(note);
            saveFile(notes);
            console.log(chalk.green.inverse("Note added successfully!"));
        }
    } else {
        console.log(chalk.redBright.inverse("Please provide title and body"));
    }
};

// remove note from data
exports.removeNote = (title) => {
    if (checkInput(title)) {
        const notes = loadFile();
        const newNotes = notes.filter((note) => note.title !== title);
        saveFile(newNotes);
        if (notes.length === newNotes.length)
            console.log(chalk.yellowBright.inverse("There is no note with title " + title));
        else console.log(chalk.green.inverse("Note removed successfully"));
    } else {
        console.log(chalk.red.inverse("Please provide a title"));
    }
};

// read a note from data
exports.readNote = (title) => {
    if (checkInput(title)) {
        const notes = loadFile();
        const note = notes.find((note) => note.title === title);
        if (note) {
            console.log(`${chalk.white.inverse(note.title)} \n\n${note.body}`);
        } else {
            console.log(chalk.yellow.inverse("There is no note with title " + title));
        }
    } else {
        console.log(chalk.red.inverse("Please provide a title"));
    }
};

// list notes with title

exports.listNotes = () => {
    const notes = loadFile();

    if (notes.length > 0) {
        console.log(chalk.whiteBright.inverse("Your notes"));
        notes.forEach((note, i) => {
            console.log(chalk.whiteBright(`${i + 1}. ${note.title}`));
        });
    } else {
        console.log(chalk.yellowBright("No notes found"));
    }
};
