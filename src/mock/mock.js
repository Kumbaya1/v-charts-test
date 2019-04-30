import Mock, { Random } from 'mockjs';
export const getBarOrLineChartData = (type = 'line') => {
    return Mock.mock({
        title: Random.ctitle(5, 15),
        label: {
            name: Random.ctitle(4, 6),
            value: Random.word(4)
        },
        data: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            "rows": [
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                    '下单用户': Random.natural(1000, 5000),
                    '下单率': Random.float(0, 0, 1, 9)
                },
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                    '下单用户': Random.natural(1000, 5000),
                    '下单率': Random.float(0, 0, 1, 9)
                }, {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                    '下单用户': Random.natural(1000, 5000),
                    '下单率': Random.float(0, 0, 1, 9)
                }, {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                    '下单用户': Random.natural(1000, 5000),
                    '下单率': Random.float(0, 0, 1, 9)
                }, {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                    '下单用户': Random.natural(1000, 5000),
                    '下单率': Random.float(0, 0, 1, 9)
                },

            ]
        },
        type: type,
        key: Random.word(16)
    })
}

export const getPieChartData = () => {
    return Mock.mock({
        title: Random.ctitle(5, 15),
        label: {
            name: Random.ctitle(4, 6),
            value: Random.word(4)
        },
        data: {
            columns: ['日期', '访问用户'],
            rows: [
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                },
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                },
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                },
                {
                    '日期': Random.date('yyyy-MM-dd'),
                    '访问用户': Random.natural(1000, 5000),
                }
            ]
        },
        type: 'pie',
        key: Random.word(16)
    })

}
