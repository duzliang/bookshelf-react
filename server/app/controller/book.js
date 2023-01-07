'use strict';

const { Controller } = require('egg');

class BookController extends Controller {
  async list() {
    const { ctx } = this;
    const books = await ctx.service.book.list();
    ctx.body = {
      status: 0,
      list: books || [],
    };
  }

  async detail() {
    const { ctx } = this;
    try {
      const parsedUrl = new URL(ctx.request.url, 'http:localhost:3000')
      const query = parsedUrl.searchParams;
      const id = query.get('id');

      if (!id) {
        ctx.body = {
          status: -1,
          msg: '参数为空',
        };
        return;
      }

      const result = await ctx.service.book.detail(id);
      ctx.body = {
        status: 0,
        detail: result,
      };
    } catch (err) {
      console.error('parse failed:', err);
    }
  }

  async add() {
    const { ctx } = this;
    const {
      title,
      sub_title,
      binding,
      images,
      author,
      price,
      language,
      category,
      publisher,
      publish_date,
    } = ctx.request.body;
    const params = {
      title,
      sub_title,
      binding,
      images,
      author,
      price,
      language,
      category,
      publisher,
      publish_date,
    };

    const result = await ctx.service.book.add(params);
    ctx.body = {
      status: 0,
      detail: result,
    };
  }

  async edit() {
    const { ctx } = this;
    const {
      _id,
      title,
      sub_title,
      binding,
      images,
      author,
      price,
      language,
      category,
      publisher,
      publish_date,
    } = ctx.request.body;
    const params = {
      _id,
      title,
      sub_title,
      binding,
      images,
      author,
      price,
      language,
      category,
      publisher,
      publish_date,
    };
    const result = await ctx.service.book.edit(params);
    if (result._id) {
      ctx.body = {
        status: 0,
        detail: result,
      };
    } else {
      ctx.body = {
        status: -1,
        statusText: '操作失败',
      };
    }
  }

  async delete() {
    const { ctx } = this;
    const parsedUrl = new URL(ctx.request.url, 'http:localhost:3000')
    const query = parsedUrl.searchParams;
    const id = query.get('id');
    const result = await ctx.service.book.delete(id);
    if (result._id) {
      ctx.body = {
        status: 0,
        detail: result,
      };
    } else {
      ctx.body = {
        status: -1,
        statusText: '操作失败',
      };
    }
  }
}

module.exports = BookController;
