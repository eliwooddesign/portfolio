import Svg from '../svg';

const leftLine = {
	slash: { x1: 15, y1: 100, x2: 55, y2: 0 },
	close: { x1: 5, y1: 100, x2: 95, y2: 0 }
};

const rightLine = {
	slash: { x1: 60, y1: 100, x2: 100, y2: 0 },
	close: { x1: 95, y1: 100, x2: 5, y2: 0 }
};

interface Props {
	id: string;
	className: string;
	onClick: () => any;
	isVisible: boolean;
}

export default function NavIcon(props: Props) {
	const { id, className, onClick, isVisible } = props;

	const animation = {
		begin: id + '.click',
		duration: '300ms',
		fill: 'freeze'
	};

	const from = isVisible ? 'slash' : 'close';
	const to = isVisible ? 'close' : 'slash';

	return (
		<Svg id={id} className={className} onClick={onClick}>
			<line x1={leftLine.slash.x1} y1={leftLine.slash.y1} x2={leftLine.slash.x2} y2={leftLine.slash.y2}>
				<animate attributeName='x1' from={leftLine[from].x1} to={leftLine[to].x1} begin={animation.begin} dur={animation.duration} fill={animation.fill} />
				<animate attributeName='x2' from={leftLine[from].x2} to={leftLine[to].x2} begin={animation.begin} dur={animation.duration} fill={animation.fill} />
			</line>

			<line x1={rightLine.slash.x1} y1={rightLine.slash.y1} x2={rightLine.slash.x2} y2={rightLine.slash.y2}>
				<animate attributeName='x1' from={rightLine[from].x1} to={rightLine[to].x1} begin={animation.begin} dur={animation.duration} fill={animation.fill} />
				<animate attributeName='x2' from={rightLine[from].x2} to={rightLine[to].x2} begin={animation.begin} dur={animation.duration} fill={animation.fill} />
			</line>
		</Svg>
	);
}
