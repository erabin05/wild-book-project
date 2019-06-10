sortSessions = datas => (
    datas.reduce((acc, currentValue) => (
        [
            ...acc.filter(data => data.id !== currentValue.id),
                {
                    id : currentValue.id,
                    name : currentValue.name,
                    date : currentValue.date,
                    students_nb : currentValue.students_nb,
                    periods : [
                        ... acc.filter(data => data.id === currentValue.id)[0]
                            ? acc.filter(data => data.id === currentValue.id)[0].periods
                            : [],
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

