use axum::{http::StatusCode, response::IntoResponse, routing::get, Json};
use serde_json::json;

async fn get_qr() -> impl IntoResponse {
    (StatusCode::OK, String::from("Hello From QR Module"))
}

async fn get_qr_list() -> impl IntoResponse {
    (
        StatusCode::OK,
        Json(json!([
            {
                "id": 1,
                "code": "123as123da",
                "value": "https://google.com"
            },
            {
                "id": 2,
                "code": "123as123da2",
                "value": "https://google.com"
            },
            {
                "id": 3,
                "code": "123as123da3",
                "value": "https://google.com"
            },
            {
                "id": 4,
                "code": "123as123da4",
                "value": "https://google.com"
            }
        ])),
    )
}

pub(crate) fn register() -> axum::Router {
    axum::Router::new()
        .route("/qr/", get(get_qr))
        .route("/qr/list", get(get_qr_list))
}
