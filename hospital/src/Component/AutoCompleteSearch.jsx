import { Autocomplete, Box, Container, Grid, Stack, TextField } from '@mui/material';
// import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import ImageCommon from './ImageComponent/ImageCommon';

// import { commonSearch } from '@/redux/services/landingService';
// import { useAppDispatch } from '@/redux/store';
// import { notify } from '@/utils/helpers/global-function';




export const AutoCompleteSearch = (props) => {
  const { placeholder, typeheader, typebanner, className, sx } = props;
  const [open, setOpen] = useState(false);
  const temp = useRef(null);
  const [searchList, setSearchList] = useState([]);
  const [param, setParam] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const length = param?.length || 0;

//   const dispatch = useAppDispatch();
//   const debouncedSearch = useCallback(
//     debounce(async (query) => {
//       if (query.length === 0) {
//         setSearchList([]);
//         return;
//       }
//       const searchValues = {
//         search_keyword: query,
//       };
//       try {
//         const res = await dispatch(commonSearch(searchValues)).unwrap();
//         setSearchList(res?.data);
//       } catch (error) {
//         notify(error);
//       }
//     }, 500),
//     [dispatch],
//   );

//   const handleSearchChange = (event) => {
//     setParam(event.target.value);
//     setIsTyping(event.target.value.length > 0);
//     debouncedSearch(event.target.value);
//   };
//   const handleKeyDown = (event) => {
//     if ((event.key === 'Enter' || event.key === ' ') && searchList.length > 0) {
//       window.location.href = `/connect${searchList[0].url}`;
//     }
//   };

  useEffect(() => {
    if (open) {
      document.body.style.position = '';
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    }
  }, [open]);
  const handleClear = () => {
    setParam('');
    setSearchList([]);
    setIsTyping(false);
  };

  return (
    <>
      <div className="search-bar-new1 w-full">
        {/* {open && <div className="backdrop active"></div>} */}
        <Autocomplete
          fullWidth
          id="country-select-demo"
          className="country-select-actomplete"
          sx={{
            width: "100%",
            border: "none",
            backgroundColor: "white",
            borderRadius: "16px",
          }}
          getOptionLabel={(option) => option.product_name}
          noOptionsText={false}
          renderOption={(_props, option) => {
            return (
              <div
                onClick={() => {
                  window.location.href = `/connect/${option?.url}`;
                }}
                aria-hidden="true"
                className="w-100"
              >
                <div className="w-100 d-flex">
                  <div className="search-data-main">
                    <Container>
                      <Grid container>
                        <Grid item xs={12}>
                          <Grid container md={8}>
                            <Grid item md={1}>
                              {/* <ImageComponent src="/assets/demo/static/uparrow.png" width={13} height={13} alt="uparrow" /> */}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </div>
                </div>
              </div>
            );
          }}
          open={open}
          renderInput={(params) => (
            <TextField
              {...params}
              id="basic-url"
              autoComplete="off"
              className="search-here1"
              sx={{
                "& .MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-inputFocused":
                  {
                    fontSize: { xs: "14px" },
                  },
                width: "100%",
              }}
              ref={temp}
              onFocus={() => {
                setOpen(true);
              }}
              onBlur={() => {
                setOpen(false);
              }}
              placeholder={placeholder}
              aria-describedby="inputGroup-sizing-sm"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <div>
                    <ImageCommon
                      src="/assets/icons/search-icon.svg"
                      width={40}
                      height={40}
                      alt="search"
                    />
                  </div>
                ),
              }}
            />
          )}
          options={[]}
        />
      </div>
    </>
  );
};
