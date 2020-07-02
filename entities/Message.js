class Message {
    constructor({msg, name}) {
        this.text = msg;
        this.user = name;
        this.added = new Date();
    }

    persist(repository) {
        const { text, user, added } = this
        repository.push({ text, user, added })
    }
}

module.exports = Message;