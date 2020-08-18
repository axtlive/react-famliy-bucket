const NAMESPACE = "loading"; // 默认命名空间是loading
const SHOW = "@@DVA_LOADING/SHOW";
const HIDE = "@@DVA_LOADING/HIDE";

export default function(opts = {}) {
  const namespace = opts.namespace || NAMESPACE;

  const initialState = {
    global: false,
    models: {},
    effects: {},
  };

  function reducer(state = initialState, action) {
    const { namespace, actionType } = action.payload || {};
    switch (action.type) {
      case SHOW:
        return {
          global: true,
          models: {
            ...state.models,
            [namespace]: true,
          },
          effects: {
            ...state.effects,
            [actionType]: true,
          },
        };
      case HIDE:
        const models = {
          ...state.models,
          [namespace]: false,
        };
        const effects = {
          ...state.effects,
          [actionType]: false,
        };
        const global = Object.keys(models).some(i => models[i]);
        return {
          global,
          models,
          effects,
        };
      default:
        return state;
    }
  }

  function onEffect(oldEffect, sagaEffects, model, actionType) {
    return function*(action) {
      yield sagaEffects.put({
        type: SHOW,
        payload: {
          namespace: model.namespace,
          actionType,
        },
      });
      yield oldEffect(action);
      yield sagaEffects.put({
        type: HIDE,
        payload: {
          namespace: model.namespace,
          actionType,
        },
      });
    };
  }

  return {
    extraReducers: {
      [namespace]: reducer,
    },
    onEffect,
  };
}
