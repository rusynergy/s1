import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Rate} from 'antd';
import api from 'api';
import ReviewForm from 'components/forms/ReviewForm';
import {links} from 'config';
import App from 'components/App';


@connect(
    (state, {computedMatch: {params}}) => ({
 	    id: params.id,
     //   data: data,
    })
)

@connect(
    ({loading, data}) => ({
        loading,
        data
    })
)

class Index extends Component {

    state = {
        loading: false,
        error  : false,
        already: false,
        list   : [],
        id     : 0,
        ok     : 0,
        star   : 1,

    }

    componentWillMount()
    {


    }

    render() {
        const {children, id} = this.props;
        if (this.state.loading)
            return <div className="loading">Загрузка...</div>;

        if (this.state.error == true)
            return <div className="in">
                    <div className="logo">
                        <a href="https://youna.studio"><img src="https://youna.studio/images/logoblack.svg" alt=""/></a>
                    </div>
                    <div className="error">Ничего не найдено</div>

            </div>;

        return <div className="in">
            <div className="logo">
                <a href="https://youna.studio/"><img src="https://youna.studio/images/logoblack.svg" alt=""/></a>
            </div>


        </div>;
    }
}

Index.propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
};


export default Index;
