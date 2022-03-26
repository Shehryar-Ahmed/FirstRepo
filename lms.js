let a = [];
class Library {
  constructor(BookList) {
    this.List = BookList;
  }
  NewStudent(Name) {
    this.name = Name;
    a.push(this.name);
  }
  getBookList() {
    for (let i = 0; i <= this.List.length - 1; i++) {
      console.log(`${i + 1} ---> ${this.List[i]}`);
    }
    console.log(this.List);
  }
  issueBook(StudentName, BookName) {
    this.Book = BookName;
    this.Sname = StudentName;
    if (ficnk.List.includes(this.Book)) {
      if (a.includes(this.Sname)) {
        console.log(`${this.Book} is now issued to ${this.Sname} for 14 days`);
        let R = this.List.indexOf(this.Book);
        this.List.splice(R, 1);
        ficnk.getBookList();
      } else {
        console.log(
          `${this.Sname} is not registered in the library as a student`
        );
      }
    } else {
      console.log(`This book, ${this.Book}, is not available`);
    }
  }
  returnBook(StudentName, BookName) {
    this.Book = BookName;
    this.Sname = StudentName;
    this.List.push(this.Book);
    console.log("Thanks for returning the book");
    ficnk.getBookList();
  }
}
ficnk = new Library(["BookOne", "BookTwo", "BookThree", "BookFour"]);
ficnk.NewStudent("Ahmed");
ficnk.NewStudent("Saman");
ficnk.NewStudent("Shazma");
ficnk.NewStudent("Shahzaib");
ficnk.issueBook("Ahmed", "BookOne");
ficnk.issueBook("Saman", "BookThree");
