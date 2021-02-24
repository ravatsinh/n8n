import {
	WorkflowExecuteMode,
} from 'n8n-workflow';

import {
	IExecutionFlattedDb,
	IWorkflowDb,
} from '../../';

import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';


@Entity()
export class ExecutionEntity implements IExecutionFlattedDb {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 128,
	})
	userId: string;

	@Column('text')
	data: string;

	@Column()
	finished: boolean;

	@Column('varchar')
	mode: WorkflowExecuteMode;

	@Column({ nullable: true })
	retryOf: string;

	@Column({ nullable: true })
	retrySuccessId: string;

	@Column('datetime')
	startedAt: Date;

	@Index()
	@Column('datetime', { nullable: true })
	stoppedAt: Date;

	@Column('json')
	workflowData: IWorkflowDb;

	@Index()
	@Column({ nullable: true })
	workflowId: string;
}
