sortSessions = datas => (
    datas.reduce((acc, currentValue) => (
        [
            ...acc.filter(data => data.id !== currentValue.id),
                {
                    id : currentValue.id,
                    name : currentValue.name,
                    date : currentValue.date,
                    periods : [
                        ... acc.filter(data => data.id === currentValue.id)[0]
                            ? acc
                                .filter(data => data.id === currentValue.id )[0]
                                .periods
                                .filter(period => period.id !== currentValue.period_id)
                            : [],
                        {
                            id : currentValue.period_id,
                            name : currentValue.period_name
                        }
                    ],
                    languages : [
                        ... acc.filter(data => data.id === currentValue.id)[0]
                            ? acc
                                .filter(data => data.id === currentValue.id)[0]
                                .languages
                                .filter(language => language.id !== currentValue.language_id)
                            : [],
                        {
                            id : currentValue.language_id,
                            name : currentValue.language_name
                        }
                    ]
                }
        ]
    ), [])
)

module.exports = sortSessions

