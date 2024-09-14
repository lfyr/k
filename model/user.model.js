const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const User = seq.define('', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',

    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    }
}, { tableName: 'tuser', createdAt: 'created_at', updatedAt: 'updated_at' })

// User.sync({ force: true })  // true 强制创建 false 存在不创建

module.exports = User