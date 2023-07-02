
export  const createQueryByEmpAndType = (emp_id, type, start, end) => {
  const data = {
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          },
          {
            "term": {
              "field_tipo_venta_aventa_value.keyword": type
            }
          }
        ],
        "must_not": [{
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }
  return data
}

export const createQueryDataTotalByType = (type, start, end) => {
  const data = {
    "query": {
      "bool": {
        "must": [
          {
            "term": {
              "field_tipo_venta_aventa_value.keyword": type
            }
          }
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}


 export const createQueryDataGranTotal = (start, end) => {
  var data = {
    "query": {
      "bool": {
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}

 export const  createQueryTotalData = (emp_id, start, end) => {
  const data = {
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          }
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}


export const  createQueryTotalDataListByEmp = (emp_id, start, end, size) => {
  const data = {
    "size": size,
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          }
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}


export const createQueryTotalDataList = (start, end, size) => {
  const data = {
    "size": size,
    "query": {
      "bool": {
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}

export const createVentasQueryByEmpAndSource = (emp_id, source, start, end, size) => {
  const data = {
    "size": size,
    "query": {
      "bool": {
        "must": [
          {"match": {"field_empresa_aventa_target_id": emp_id}},
          {"match": {"field_contacto_piso_value.keyword": source}}
        ],
        "must_not": [
          {"match": {"field_estatus_aventa_value": "Refacturada"}},
          {"match": {"field_estatus_aventa_value": "Cancelada"}},
          {"match": {"field_forma_pago_pedido_value": "Transferencia"}}
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}

export const createLeadsQueryBySource = (emp_id, source, start, end) => {
  const data = {
    "query": {
      "bool": {
        "must": [
          {"match": {"field_empresa_account_target_id": emp_id}},
          {"match": {"field_contacto_piso_value.keyword": source}}
        ],
        "filter": {
          "range": {
            "created": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}

export const createLeadsQueryBySourceData = (emp_id, source, start, end, size) => {
  const data = {
    "size": size,
    "query": {
      "bool": {
        "must": [
          {"match": {"field_empresa_account_target_id": emp_id}},
          {"match": {"field_contacto_piso_value.keyword": source}}
        ],
        "filter": {
          "range": {
            "created": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    }
  }

  return data
}

export const createFormaPagoQueryByEmp = (emp_id, start, end) => {
  const data = {
    "size": 0, 
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          },
          {
            "match": {
              "field_tipo_venta_aventa_value.keyword": "Menudeo"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Facturada"
            }
          }
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    },
    "aggs": {
        "FormaPago": {
          "terms": {
            "field": "field_forma_pago_pedido_value.keyword"
          }
        }
      }
  }
  return data
}

export const createFormaPagoBancoQueryByEmp = (emp_id, start, end) => {
  const data = {
    "size": 0, 
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          },
          {
            "match": {
              "field_tipo_venta_aventa_value.keyword": "Menudeo"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Facturada"
            }
          },
          {
            "term": {
              "field_forma_pago_pedido_value.keyword": "Banco"
            }
          },
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": start,
              "lte": end
            }
          }
        }
      }
    },
    "aggs": {
        "Bancos": {
          "terms": {
            "field": "field_banco_pedido_tid.keyword"
          }
        }
      }
  }
  return data
}

export const createQueryProspeccionByEmp = (emp_id) => {
  const data = {
    "size": 0, 
    "query": {
      "bool": {
        "must": [{
          "match": {
            "empresa_nid": emp_id
          }
        }],
        "filter": {
          "range": {
            "field_fecha_piso_value": {
              "gte": "2018/01/01"
            }
          }
        }
      }
    },
    "aggs": {
      "byYear": {
        "date_histogram": {
          "field": "field_fecha_piso_value",
          "calendar_interval": "year",
          "format": "yyyy-MM-dd"
        },
        "aggs": {
          "byMonth": {
            "date_histogram": {
              "field": "field_fecha_piso_value",
              "calendar_interval": "month",
              "format": "yyyy-MM-dd"
            }
          }
        }
      }
    }
  }

  return data
}

export const createVentasHistogramByEmp = (emp_id) => {
  const data = {
    "size": 0,
    "query": {
      "bool": {
        "must": [
          {
            "match": {
              "field_empresa_aventa_target_id": emp_id
            }
          }
        ],
        "must_not": [
          {
            "match": {
              "field_estatus_aventa_value": "Refacturada"
            }
          },
          {
            "match": {
              "field_estatus_aventa_value": "Cancelada"
            }
          },
          {
            "match": {
              "field_forma_pago_pedido_value": "Transferencia"
            }
          }
        ],
        "filter": {
          "range": {
            "field_fecha_fact_aventa_value": {
              "gte": "2018/01/01"
            }
          }
        }
      }
    },
    "aggs": {
      "byYear": {
        "date_histogram": {
          "field": "field_fecha_fact_aventa_value",
          "calendar_interval": "year",
          "format": "yyyy-MM-dd"
        },
        "aggs": {
          "byMonth": {
            "date_histogram": {
              "field": "field_fecha_fact_aventa_value",
              "calendar_interval": "month",
              "format": "yyyy-MM-dd"
            }
          }
        }
      }
    }
  } 
  return data
}