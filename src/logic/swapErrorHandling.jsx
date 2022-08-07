
export function errorHandling(res, alerts, setAlerts, { setAmountOutError }) {


    if (res.response && res.response.status === 400) {

        if (res.response.data.amount_out) {
            setAmountOutError({ error: true, message: res.response.data.amount_out[0] })
        }

        const alertKey = alerts.length;
        setAlerts((prevState) =>
            [...prevState, <div key={alertKey} class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>(400)</strong> One [or more] of the inputs have been incorrectly formatted
                <button data-dismiss="alert" type="button" className="xButton">x</button>
            </div>]
        );

    }
}