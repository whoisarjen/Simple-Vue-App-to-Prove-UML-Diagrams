import Vue from 'vue'

Vue.prototype.$getAllIndexedDB = async (value) => {
  const request = await Vue.prototype.$connectIndexedDB()
  return new Promise(resolve => {
    request.onsuccess = async function () {
      const valueITEMS = await request.result.transaction(value).objectStore(value).getAll()
      valueITEMS.onsuccess = function () {
        resolve(valueITEMS.result)
      }
    }
  })
}

Vue.prototype.$getIndexedDBbyID = async (where, id) => {
  const request3 = await Vue.prototype.$connectIndexedDB()
  return new Promise(resolve => {
    request3.onsuccess = async function () {
      const objectStore = await request3.result.transaction(where, 'readwrite').objectStore(where)
      const objectStoreTitleRequest = await objectStore.get(id.toString())
      objectStoreTitleRequest.onsuccess = async function () {
        resolve(objectStoreTitleRequest.result)
      }
    }
  })
}

Vue.prototype.$putIndexedDB = async (where, id, what, value) => {
  value = value.toString()
  const request3 = await Vue.prototype.$connectIndexedDB()
  return new Promise(resolve => {
    request3.onsuccess = async function () {
      const objectStore = await request3.result.transaction(where, 'readwrite').objectStore(where)
      const objectStoreTitleRequest = await objectStore.get(id.toString())
      objectStoreTitleRequest.onsuccess = async function () {
        const data = await objectStoreTitleRequest.result
        data[what] = await value
        await objectStore.put(data)
        resolve()
      }
    }
  })
}

Vue.prototype.$deleteIndexedDB = async (where, _id) => {
  _id = _id.toString()
  const request = await Vue.prototype.$connectIndexedDB()
  return new Promise(resolve => {
    request.onsuccess = async function () {
      await request.result.transaction(where, 'readwrite').objectStore(where).delete(_id)
    }
    resolve()
  })
}

Vue.prototype.$addIndexedDB = async (where, value) => {
  if (value && value.length > 0) {
    for (let i = 0; i < value.length; i++) {
      value[i]._id = (value[i]._id).toString()
    }
    const request = await Vue.prototype.$connectIndexedDB()
    return new Promise(resolve => {
      request.onsuccess = function () {
        const objectStore = request.result.transaction(where, 'readwrite').objectStore(where)
        value.forEach(function (products) {
          objectStore.add(products)
        })
        resolve()
      }
    })
  }
}
