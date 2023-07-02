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


