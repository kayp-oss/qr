use crate::utils::tracing_subscriber::tracing_subscriber;
use std::net;
use tower_http::cors::Any;

mod modules;
mod utils;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber();

    let app = axum::Router::new()
        .merge(crate::modules::qr::router::register())
        .layer(
            tower_http::cors::CorsLayer::new()
                .allow_origin(Any)
                .allow_methods(Any)
                .allow_headers(Any),
        );

    let addr = net::SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = tokio::net::TcpListener::bind(addr).await?;

    println!("listening on http://{}", listener.local_addr().unwrap());
    axum::serve(listener, app.into_make_service()).await?;

    Ok(())
}
