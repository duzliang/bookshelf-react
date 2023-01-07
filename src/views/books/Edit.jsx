import React, { useState } from 'react';
import { DatePicker, Form, Input, Modal, message, Button } from 'antd';

import dayjs from 'dayjs';

import API from '../../utils/api';
import server from '../../utils/server';

const Edit = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);

    if (id) {
      server.get(API.book.detail(id)).then(({ detail }) => {
        form.setFieldsValue({
          title: detail.title,
          sub_title: detail.sub_title,
          binding: detail.binding,
          author: detail.author,
          price: detail.price,
          publisher: detail.publisher,
          publish_date: dayjs(detail.publish_date, 'YYYY-MM'),
        });
      });
    }
  };
  const handleOk = () => {
    const values = form.getFieldsValue();
    if (id) {
      values._id = id;
      server.patch(API.book.edit(), values).then(res => {
        if (res.status === 0) {
          message.success('编辑成功');
          setIsModalOpen(false);
        }
      });
    } else {
      server.post(API.book.add(), values).then(res => {
        if (res.status === 0) {
          message.success('添加成功');
          setIsModalOpen(false);
        }
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {id
        ? <a onClick={showModal}>编辑</a>
        : <Button type="primary" onClick={showModal}>新增</Button>
      }

      <Modal
        title={id ? '编辑书籍' : '新增书籍'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="book_edit"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          autoComplete="off"
        >
          <Form.Item
            label="书名"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入图书标题',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="副标题" name="sub_title">
            <Input />
          </Form.Item>
          <Form.Item label="封面" name="binding">
            <Input />
          </Form.Item>
          <Form.Item label="作者" name="author">
            <Input />
          </Form.Item>
          <Form.Item label="价格" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="出版社" name="publisher">
            <Input />
          </Form.Item>
          <Form.Item label="出版时间" name="publish_date">
            <DatePicker picker="month" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
