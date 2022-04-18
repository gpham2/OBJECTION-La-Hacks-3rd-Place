#!/bin/bash
gcloud iam service-accounts create "my-service-account" \
  --project "hold-it-347420"

gcloud services enable iamcredentials.googleapis.com \
  --project "hold-it-347420"

gcloud iam workload-identity-pools create "objection-pool" \
  --project="hold-it-347420" \
  --location="global" \
  --display-name="Objection! pool"

gcloud iam workload-identity-pools describe "objection-pool" \
  --project="hold-it-347420" \
  --location="global" \
  --format="value(name)"

gcloud iam workload-identity-pools providers create-oidc "objection-provider" \
  --project="hold-it-347420" \
  --location="global" \
  --workload-identity-pool="objection-pool" \
  --display-name="Objection! provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com"

gcloud iam service-accounts add-iam-policy-binding "my-service-account@hold-it-347420.iam.gserviceaccount.com" \
  --project="hold-it-347420" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/528497814769/locations/global/workloadIdentityPools/objection-pool/attribute.repository/hold-it/api"

gcloud iam workload-identity-pools providers describe "objection-provider" \
  --project="hold-it-347420" \
  --location="global" \
  --workload-identity-pool="objection-pool" \
  --format="value(name)"

