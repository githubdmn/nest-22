import {
	AfterInsert,
	AfterRemove,
	AfterUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class User {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	email: string;
	@Column()
	password: string;
	@AfterInsert()
	logInsert() {
		console.log('Insert User with id ', this.id);
	}
	@AfterRemove()
	logRemove() {
		console.log('Removed User with id ', this.id);
	}
	@AfterUpdate()
	logUpdate() {
		console.log('Updated User with id ', this.id);
	}
}
