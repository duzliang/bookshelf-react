const { Service } = require('egg');

class BookService extends Service {
  async list() {
    const { ctx } = this;
    return ctx.model.Book.find({});
  }

  async detail(id) {
    const { ctx } = this;
    return ctx.model.Book.findById(id);
  }

  async add(values) {
    const { ctx } = this;
    const book = new ctx.model.Book();
    book.title = values.title;
    book.sub_title = values.sub_title;
    book.binding = values.binding;
    book.images = values.images;
    book.author = values.author;
    book.price = values.price;
    book.language = values.language;
    book.category = values.category;
    book.publisher = values.publisher;
    book.publish_date = values.publish_date;
    book.created = values.created;

    return book.save();
  }

  async edit(values) {
    return this.ctx.model.Book.updateMany({ _id: values._id }, values);
  }

  async delete(id) {
    return this.ctx.model.Book.findByIdAndDelete({ _id: id });
  }
}

module.exports = BookService;
