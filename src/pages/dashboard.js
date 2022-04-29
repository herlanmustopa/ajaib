// material
import {
  Breadcrumbs,
  Card,
  Link,
  Container,
  Divider,
  Typography,
  Stack,
} from "@mui/material";

import { TableData } from "../components";

// import { getData } from "../helpers/actions";
// import { useGetCity, useGetSize } from "../hooks";

// import "./styles.scss";

import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

export default function ChannelManagement() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <Container sx={{ mt: -5 }} maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" component={RouterLink} color="inherit" to="/">
            Dashboard
          </Link>
        </Breadcrumbs>
        <Card sx={{ mt: 2, px: 2, boxShadow: 2 }} variant="outlined">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <Typography variant="h6" sx={{ mt: 4 }}>
                List Data
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mb: 2 }} />
          <TableData sx={{ mb: 2 }} />
          <Divider sx={{ mb: 2 }} />

          {/* <Stack width="200" sx={{ px: 2 }}>
            <Header
              search={search}
              setSearch={setSearch}
              onSearch={onSubmitSearch}
            />
          </Stack> */}
          {/* <List list={data} loading={loading} /> */}
          {/* {!loading && data.length === 0 && (
            <Empty
              title="Data belum tersedia"
              desc="Data yang Anda cari tidak ada atau belum tersedia saat ini, silahkan isi data baru terlebih dahulu."
            />
          )} */}
        </Card>
      </Container>
    </>
  );
}
