class FieldBuilder {
   constructor(size) {
        this.new = [];
        for (let i = 0; i < size; i++) {
            this.new.push({
                isClicked: false,
                status: 'closed'
            });
        }
    };

    plantBomb = () => {
        return Math.floor(Math.random() * this.new.length);
    };
}

export default FieldBuilder;