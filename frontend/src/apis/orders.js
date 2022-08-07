
import axios from 'axios';
import { orders } from '../urls/index'
import { postOrder } from '../apis/orders';

const postLineFoods = () => {
  dispatch({ type: lineFoodsActionTyps.POSTING });
  postOrder({
    line_food_ids: state.lineFoodsSummary.line_food_ids,
  }).then(() => {
    dispatch({ type: lineFoodsActionTyps.POST_SUCCESS });
    window.location.reload();
  });
};

export const postOrder = (params) => {
  return axios.post(orders,
    {
      line_food_ids: params.line_food_ids
    },
  )
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}

