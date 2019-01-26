'use strict';

var WhereToGo = WhereToGo || {};

WhereToGo.CommonSQL = {

    sql: require('mssql'),

    config: {
        user: "UserApp_SQLLogin_2",
        password: "eaCEHgd9ZUZEE3k",
        server: "wheretogobase.mssql.somee.com",
        database: "wheretogobase"
    },

    AddSystemUsers: function (fname, mname = null) {

        this.sql.connect(this.config, err => {
            if (err) {
                console.dir(err);
                return;
            }

            new this.sql.Request()
                .input('i_fname', this.sql.NVarChar(20), fname)
                .input('i_mname', this.sql.NVarChar(20), mname)
                .query('insert systemusers (fname, mname) values (@i_fname, @i_mname)', (err, result) => {
                    if (err) {
                        console.dir(err);
                    }

                    console.dir(result)
                });
        });

        this.sql.on('error', err => {
            console.dir(err);
        });
    },

    AddSystemUsersAsuns: async function (fname, mname = null) {
        try {
            let pool = await this.sql.connect(this.config)
            let result1 = await pool.request()
                .input('i_fname', this.sql.NVarChar(20), fname)
                .input('i_mname', this.sql.NVarChar(20), mname)
                .query('insert systemusers (fname, mname) values (@i_fname, @i_mname)');

            console.dir(result1);
        } catch (err) {
            console.dir(err);
        }
    }
};