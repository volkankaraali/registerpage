const LoadingIcon = (props) => (
    <svg width={props.size || "200px"} height={props.size || "200px"} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="84" cy="50" r="10" fill="#ffbf5e">
            <animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#ffbf5e;#89bff8;#408ee0;#1b75be;#ffbf5e" begin="0s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#ffbf5e">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        </circle><circle cx="50" cy="50" r="10" fill="#1b75be">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate>
        </circle><circle cx="84" cy="50" r="10" fill="#408ee0">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate>
        </circle><circle cx="16" cy="50" r="10" fill="#89bff8">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate>
        </circle>
    </svg>
)

export default LoadingIcon;