import { Input,Rate,Button,Form,message } from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import api from 'api';


@connect(
	({loading}) => ({
		loading
	})
)
class ReviewForm extends React.Component {
	state = {
		visible: false,
		item: {},
        rate: 5,
        loading: false,

	};
	handleSubmit = e => {
		const {
			dispatch,
			form,
		} = this.props;
		e.preventDefault();
		form.validateFields((err, data) => {
		   if (!err)
           {
				// api
                this.setState({loading: true}, () => {
                    api.writeReview(data).then(result => {
                        this.setState({loading:false});
                        if (!result.success || !result.data.result)
                            return message.error(result.data.text || 'Ошибка отправки отзыва, попробуйте позднее');
                        dispatch({
                            type: 'data/set',
                            payload: {
                                star: result.data.star,
                                point: result.data.point,
                            }
                        });
                        message.success('Отзыв отправлен!');
                        this.props.props.onSave();
                    });
                });

		   }
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
        let item = this.props.props.item;


		return (
					<Form layout="vertical" onSubmit={this.handleSubmit}>

						{(item.id !== undefined) && (
                          getFieldDecorator('id', {
							initialValue: item.id
						  })(<Input type="hidden" />)
						)}

                        <Form.Item>
                          {getFieldDecorator('star_master', {
                            rules: [
                              {
                                required: true,
                                message: 'Пожалуйста, поставьте оценку работе мастера',
                              },
                            ],
                          })(<Rate
                                onChange={(e) => {
                                    this.setState({rate: e});
                                }}
                           />)}
                        </Form.Item>

                        <Form.Item>
                          {getFieldDecorator('text_master', {
                            rules: [
                              {
                                required: this.state.rate == 5 ? false : true,
                                message: 'Пожалуйста, расскажите подробнее',
                              },
                            ],
                          })(<Input.TextArea
                                size="large"
                                placeholder="Оставьте отзыв"
                                autoSize={{ minRows: 3 }}
                           />)}
                           {(this.state.rate < 5) && (<div className="red">Расскажите об оценке подробнее, пожалуйста.</div>)}
                        </Form.Item>


					   <div className="drawer-bottom">
							<Button htmlType="submit" size="large" type="primary" loading={this.state.loading} block>
								{this.props.props.all > 1 ? 'Далее' : 'Отправить'}
							</Button>
                            <p className="mini">Отправляя данные, вы соглашаетесь с обработкой персональных данных в соответствии с нашей <a href="podruzhki.pro/policy/" target="blank">политикой конфиденциальности</a></p>
						</div>

					</Form> 
		);
	}
}


ReviewForm.propTypes = {
	children: PropTypes.any,
	dispatch: PropTypes.func,
};


export default Form.create()(ReviewForm);