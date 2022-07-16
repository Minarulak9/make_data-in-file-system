const fs = require("fs");
class Project {
  constructor(fileName) {
    if (!fs.existsSync(`output/${fileName}`)) {
      fs.mkdirSync(`output/${fileName}`);
    }
    this.fileName = fileName;
    this.filePath = `${__dirname}/output/${fileName}/${fileName}.txt`;
    fs.appendFileSync(this.filePath, "");
  }
  appendRandNumbers(min, max, cout) {
    console.log("Appending random numbers..🔃");
    for (let i = 0; i < cout; i++) {
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      fs.appendFileSync(this.filePath, rand.toString() + " ");
    }
    console.log("number writen succesfull..✅");
  }
  writeRandomNumbers(min, max, cout) {
    console.log("Writting random numbers..🔃");
    fs.writeFileSync(this.filePath, "");
    for (let i = 0; i < cout; i++) {
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      fs.appendFileSync(this.filePath, rand.toString() + " ");
    }
    console.log("number writen succesfull..✅");
  }
  readData() {
    console.log("Reading data....");
    let content = fs.readFileSync(this.filePath, "utf-8");
    console.log("Reading succesfull...");
    if (content.length == 0) {
      console.log("the file is empty...❕");
    } else {
      console.log(content.trim());
    }
  }
  readSortedData() {
    console.log("Reading sorted data");
    try {
      let content = fs.readFileSync(
        `${__dirname}/output/${this.fileName}/sorted.txt`,
        "utf-8"
      );
      console.log("Reading sorted data succesfull");
      console.log(content);
    } catch (error) {
      console.log("no sorted data present");
    }
  }
  readDataLentgh() {
    let content = fs.readFileSync(this.filePath, "utf-8").trim().split(" ");
    console.log(content.length);
  }

  clearData() {
    fs.writeFileSync(this.filePath, "");
    console.log("data is cleared succesfuly done..✅");
  }
  sortData() {
    let content = fs.readFileSync(this.filePath, "utf-8").trim().split(" ");
    console.log("Your data is sorting...");
    for (let i = 0; i < content.length; i++) {
      for (let j = 0; j < content.length - i; j++) {
        if (content[j] * 1 > content[j + 1] * 1) {
          let temp = content[j];
          content[j] = content[j + 1];
          content[j + 1] = temp;
        }
      }
    }
    console.log("yoooooo your data is succesfully sorted");
    fs.writeFileSync(
      `${__dirname}/output/${this.fileName}/sorted.txt`,
      content.join(" ")
    );
    console.log(`sorted data saved in=> output/${this.fileName}/sorted.txt`);
  }

  find(num) {
    if (!fs.existsSync(`${__dirname}/output/${this.fileName}/sorted.txt`)) {
      console.log("Please sort data first..😊");
      return;
    }
    let content = fs
      .readFileSync(`${__dirname}/output/${this.fileName}/sorted.txt`, "utf-8")
      .trim()
      .split(" ");
    let start = 0;
    let end = content.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (content[mid] * 1 == num) {
        console.log(`${num} is founded in ${mid} index`);
        return mid;
      } else if (content[mid] * 1 > num) {
        end = mid - 1;
      } else if (content[mid] * 1 < num) {
        start = mid + 1;
      }
    }
    console.log("not found");
    return -1;
  }
}

let project1 = new Project("name");
project1.writeRandomNumbers(1, 100, 100);
// project1.appendRandNumbers(1, 1, 100);
// project1.writeRandomNumbers(1, 2, 100);
project1.readDataLentgh();
project1.sortData();
project1.find(100);
