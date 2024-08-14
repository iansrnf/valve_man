import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ValveStatus' })
export class IotValve {
  @PrimaryGeneratedColumn('uuid', { name: 'valve_id' })
  valveId: string;

  @Column({ type: 'decimal', scale: 2, nullable: true })
  angle: number;

  @Column({ type: 'decimal', scale: 2, nullable: true })
  initialAngle: number;

  @Column({ type: 'decimal', scale: 2, nullable: true })
  steps: number;

  @Column({ nullable: true })
  isForward: boolean;

  @Column({ type: 'decimal', scale: 2, nullable: true })
  percentage: number;

  @Column('int', { nullable: true })
  noOfTurns: number;
}
