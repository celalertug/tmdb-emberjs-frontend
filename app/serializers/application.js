import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload.results,
      id,
      requestType
    );
  }
}
