sortSessions = datas => (
    datas.reduce((acc, currentValue, index) => (
        [
            ...acc.filter(data => data.id !== currentValue.id),
                {
                    id : currentValue.id,
                    name : currentValue.name,
                    date : currentValue.date,
                    periods : [
                        ... (acc[acc.length-1]&& acc[acc.length-1].id === currentValue.id) ? acc[acc.length-1].periods : [],
                        {
                            id : currentValue.period_id,
                            name : currentValue.period_name
                        }
                    ]
                }
        ]
    ), [])
)

module.exports = sortSessions

