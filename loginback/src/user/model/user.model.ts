import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "Users",
})

export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    uid: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    upw: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    uname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    uphone: string;
}